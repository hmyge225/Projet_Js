// Fonction pour inverser une chaîne  
function reverse_chaine(chaine){
    return chaine.split('').reverse().join('');
};

// Fonction pour compter les char d'une chaîne 
compt_char = function(tab){
    return tab.length 
};

// Fonction pour Mettre en majuscule une chaîne  
maj_char = (chaine) => {
    return chaine.toUpperCase()
}

// Fonction min et Max
max_min = (tab) => {
    return `minimum est : ${Math.min(...tab)} et Maximum est : ${Math.max(...tab)}`
}

// Somme du tableaux
somme = function(tab){
    let som = 0;
    for(value of tab){
        som += value
    }
    return som 
}

// Nombre pairs
function filtre_tab(tab){
    pair = []
    for(value of tab){
        if(value % 2 === 0){
            // Ajouter des valeurs au tableau 
            pair.push(value)
        } 
    }
    return pair.length > 0 ? pair : 'Aucune valeur paire'
}

// Factoriel 
function facto(nombre){
    let fact = 1;
    for (let i=nombre; i>=1; i--){
        fact *= i;
    }
    return fact
}

// Nombre permier 
function nb_premier(nombre){

    if (nombre <= 1){
        return `${nombre} n'est pas premier`
    }

    for(let i=2; i<=Math.sqrt(nombre); i++){
        if(nombre % i === 0){
            return `${nombre} n'est pas premier`
        }
    }
    return `${nombre} est premier`
}

// Fibonnacci 
function fibo(nombre){
    if (nombre <=0){
        return []
    }

    let tab = [0,1]
    for(i=2; i<nombre; i++){
        tab.push(tab[i-1] + tab[i-2])
    }
    return tab
} 