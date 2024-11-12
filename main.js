function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }

        function mascara_cpf()
        {
        document.addEventListener('keydown', function(event) { 
            if(event.keyCode != 46 && event.keyCode != 8){
              var i = document.getElementById("CPF").value.length;
              if (i === 3 || i === 7)
                document.getElementById("CPF").value = document.getElementById("CPF").value + ".";
              else if (i === 11)
                document.getElementById("CPF").value = document.getElementById("CPF").value + "-";
            }
          });
        }

        const modal = document.getElementById("modal");

  function openModal() {
    modal.showModal();
    setTimeout(() => {
      modal.classList.add("visivel");
    }, 8);
  }

  function closeModal() {
    modal.classList.remove("visivel");
    setTimeout(() => {
      modal.close();
    }, 800);
  }

  const form = document.querySelector('form'); 
form.addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Registrado com êxito!');
  
    setTimeout(() => {
        window.location.href = 'pf.html';
    }, 1000);
});



document.getElementById('nome').value = localStorage.getItem('nome');
          document.getElementById('email').value = localStorage.getItem('email');
          document.getElementById('telefone').value = localStorage.getItem('telefone');
          document.getElementById('CPF').value = localStorage.getItem('CPF');
          document.getElementById('senha').value = localStorage.getItem('senha');

                function saveFormData() {
                   const nome = document.getElementById("nome").value;
                   const email = document.getElementById("email").value;
                   const telefone = document.getElementById("telefone").value;
                   const CPF = document.getElementById("CPF").value;
                   const senha = document.getElementById("senha").value;

                   localStorage.setItem('nome', nome);
                   localStorage.setItem('email', email);
                   localStorage.setItem('telefone', telefone);
                   localStorage.setItem('CPF', CPF);
                   localStorage.setItem('senha', senha);
                }

