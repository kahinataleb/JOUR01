function remplacerParIndex(nom) {
          // Créer la liste alphabet allant de 'a' à 'z'
          var alphabet = 'abcdefghijklmnopqrstuvwxyz';
      
          // Convertir le nom en minuscules pour assurer la correspondance
          nom = nom.toLowerCase();
      
          // Initialiser une chaîne pour stocker les indices
          let resultat = '';
      
          // Parcourir chaque lettre du nom
          for (let i = 0; i < nom.length; i++) {
              let lettre = nom[i];
      
              // Vérifier si la lettre est une lettre de l'alphabet
              if (alphabet.includes(lettre)) {
                  // Trouver l'index de la lettre dans l'alphabet et ajouter 1 car les indices commencent à 1
                  var index = alphabet.indexOf(lettre) + 1;
      
                  // Ajouter l'index à la chaîne résultat
                  resultat += index + ' ';
              } else {
                  // Si la lettre n'est pas une lettre de l'alphabet, laisser intacte
                  resultat += lettre;
              }
          }
      
          return resultat.trim(); // Supprimer les espaces en trop à la fin
      }
      
      // Exemple d'utilisation de la fonction
      let nom = "openai";
      let resultat = remplacerParIndex(nom);
      console.log(resultat); // Affiche "15 16 5 14 1 9"
      