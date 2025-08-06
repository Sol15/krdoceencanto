document.querySelectorAll('.produto-card').forEach(card => {
  card.addEventListener('click', function(e) {
    let produto = card.getAttribute('data-produto');
    // Se for barra recheada, pega o sabor selecionado
    if (card.classList.contains('barra-card')) {
      const sabor = card.querySelector('.sabor-select').value;
      produto += ` (${sabor})`;
    }
    document.getElementById('produtoEscolhido').value = produto;
    document.getElementById('pedido').scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('pedidoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Pegue os dados do formulário
  const produto = document.getElementById('produtoEscolhido').value;
  const nome = this.nome.value;
  const rua = this.rua.value;
  const numero = this.numero.value;
  const bairro = this.bairro.value;
  const cep = this.cep.value;
  const telefone = this.telefone.value;
  const data = this.data.value;

  // Monte a mensagem
  const mensagem = 
    `*Olá! Quero fazer um pedido:*\n\n` +
    `*Produto:* ${produto}\n` +
    `*Nome:* ${nome}\n` +
    `*Endereço:* ${rua}, ${numero}, ${bairro}, CEP: ${cep}\n` +
    `*Telefone:* ${telefone}\n` +
    `*Data do pedido:* ${data}`;

  // Seu número do WhatsApp (apenas números com DDD e país, ex: 5511999999999)
  const numeroWhats = '5551986176892'; // Substitua pelo seu número

  // Monta o link
  const link = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;

  // Redireciona
  window.open(link, '_blank');
});
