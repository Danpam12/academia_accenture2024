#utf-8
#language: pt

Funcionalidade: cadastro-seguro-veiculo - Cadastrar Seguro Veiculo
    Cenário: Validação de cadastro de seguro para veiculo com sucesso
        Dado que o usuario esta na aba do portal da Tricentis
        Quando o usuario clicar na aba Motorcyle
        E preenche o formulario da aba Vehicle Data
        E preenche o formulario da aba Insurant Data
        E preenche o formulario da aba Product Data
        E preenche o formulario da aba Price Option
        Então valida a aba Send Quote