function mostAppear(arr) {
          if (arr.length === 0) {
              return null; // Si le tableau est vide, il n'y a pas de mode.
          }
      
          // Créer un objet pour compter les occurrences de chaque nombre
          let count = {};
          let mostFrequent = arr[0];
         let maxCount = 1;
      
          for (let i = 0; i < arr.length; i++) {
              let num = arr[i];
              if (count[num] === undefined) {
                  count[num] = 1;
              } else {
                  count[num]++;
              }
      
              if (count[num] > maxCount) {
                  mostFrequent = num;
                  maxCount = count[num];
              }
          }
      
          return mostFrequent;
      }
      

      console.log(mostAppear([0,1,3,3,3,3,3,1,0]));
      console.log(mostAppear([1,2,1,3,1,4,1,5,1])); 
      console.log(mostAppear([1,1,1,3,3,3,1,1,1,5,5,5,1,1])); 
      console.log(mostAppear([9,9,9,9,9,9,9,9,8])); 
      console.log(mostAppear([9,9,9,9,9,9,9,9,9])); 
      