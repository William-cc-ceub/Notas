document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('notepad');
    const saveButton = document.getElementById('save');

    // Carregar notas salvas
    chrome.storage.local.get(['notes'], function(result) {
        textarea.value = result.notes || '';
    });

    // Salvar notas
    saveButton.addEventListener('click', function() {
        const notes = textarea.value;
        chrome.storage.local.set({ notes: notes }, function() {
            alert('Notas salvas!');
        });
    });
});
