function toggleHidden(element) {
    if (element) {
        element.classList.toggle('hidden');
    }
}

['fechar-box-id', 'postar-id', 'postar-show-id', 'publish-button-id'].forEach(function(id) {
    var element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', function() {
            toggleHidden(document.getElementById('blackout-page-id'));
            toggleHidden(document.getElementById('box-post-id'));
        });
    }
});

function toggleElementClasses(element, class1, class2) {
    if (element) {
        element.classList.toggle(class1);
        element.classList.toggle(class2);
    }
}

// Para sugestões
var sugestoes = document.querySelectorAll('.sugestao, .sugestao-select');
sugestoes.forEach(function(sugestaoDiv) {
    if (sugestaoDiv) {
        sugestaoDiv.addEventListener('click', function() {
            toggleElementClasses(sugestaoDiv, 'sugestao', 'sugestao-select');
        });
    }
});

// Para pastas
var pastas1 = document.querySelectorAll('.pastas, .pastas-select');
pastas1.forEach(function(pastasDiv) {
    if (pastasDiv) {
        pastasDiv.addEventListener('click', function() {
            toggleElementClasses(pastasDiv, 'pastas', 'pastas-select');
        });
    }
});

function toggleButtons(buttonClicked, otherButton) {
    if (buttonClicked.classList.contains('publicar-botao')) {
        // Se o botão clicado não estiver selecionado, alternamos as classes de ambos os botões
        buttonClicked.classList.remove('publicar-botao');
        buttonClicked.classList.add('publicar-botao-select');
        
        otherButton.classList.remove('publicar-botao-select');
        otherButton.classList.add('publicar-botao');
    }
    // Se o botão clicado já estiver selecionado, não fazemos nada
}

var publicarButtons = document.querySelectorAll('.publicar-botao, .publicar-botao-select');

if (publicarButtons.length === 2) {  // Garante que temos exatamente dois botões
    publicarButtons[0].addEventListener('click', function() {
        toggleButtons(publicarButtons[0], publicarButtons[1]);
    });

    publicarButtons[1].addEventListener('click', function() {
        toggleButtons(publicarButtons[1], publicarButtons[0]);
    });
}

// Get all dropdown elements
var dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function() {
        var content = this.querySelector('.dropdown-content');
        content.classList.toggle('show');
    });
});

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function(dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}