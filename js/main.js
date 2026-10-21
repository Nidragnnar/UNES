// ========== Menu do celular ==========
const menuBotao = document.querySelector(".menu-botao");
const menu = document.querySelector(".menu");

if (menuBotao && menu) {
    menuBotao.addEventListener("click", () => {
        const aberto = menu.classList.toggle("aberto");
        menuBotao.setAttribute("aria-expanded", aberto);
        menuBotao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });
}

// ========== Ano atual no rodapé ==========
document.querySelectorAll("[data-ano]").forEach((el) => {
    el.textContent = new Date().getFullYear();
});

// ========== Formulário de contato ==========
const form = document.querySelector("#form-contato");

if (form) {
    const status = form.querySelector(".status");
    const botao = form.querySelector("button[type=submit]");
    const campos = form.querySelectorAll("input, textarea");

    const mensagemErro = (campo) => {
        const v = campo.validity;
        if (v.valueMissing) return "Este campo é obrigatório.";
        if (v.typeMismatch) return "Digite um e-mail válido.";
        if (v.tooShort) return `Use pelo menos ${campo.minLength} caracteres.`;
        if (v.tooLong) return `Use no máximo ${campo.maxLength} caracteres.`;
        return "";
    };

    const validar = (campo) => {
        const erro = mensagemErro(campo);
        campo.closest(".campo").classList.toggle("invalido", erro !== "");
        campo.closest(".campo").querySelector(".erro").textContent = erro;
        campo.setAttribute("aria-invalid", erro !== "");
        return erro === "";
    };

    campos.forEach((campo) => {
        campo.addEventListener("blur", () => validar(campo));
        campo.addEventListener("input", () => {
            if (campo.closest(".campo").classList.contains("invalido")) validar(campo);
        });
    });

    const mostrarStatus = (texto, tipo) => {
        status.textContent = texto;
        status.className = `status ${tipo}`;
    };

    form.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        const validos = [...campos].map(validar);
        if (validos.includes(false)) {
            form.querySelector(".invalido input, .invalido textarea").focus();
            return;
        }

        botao.disabled = true;
        botao.textContent = "Enviando...";

        try {
            // Sem um ID do Formspree configurado, o envio é apenas simulado
            if (form.action.includes("SEU_ID")) {
                await new Promise((r) => setTimeout(r, 800));
            } else {
                const resposta = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: { Accept: "application/json" },
                });
                if (!resposta.ok) throw new Error(resposta.status);
            }
            form.reset();
            mostrarStatus("Mensagem enviada! Responderemos em breve.", "sucesso");
        } catch {
            mostrarStatus("Não foi possível enviar agora. Tente novamente mais tarde.", "falha");
        } finally {
            botao.disabled = false;
            botao.textContent = "Enviar mensagem";
        }
    });
}
