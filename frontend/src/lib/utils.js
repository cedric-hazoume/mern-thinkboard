export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric', 
    });
}