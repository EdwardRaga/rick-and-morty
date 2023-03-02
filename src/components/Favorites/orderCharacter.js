
//funcion de ordenamiento menor a mayor
export function bubbleOrder(typeOrder, array) {

    if(typeOrder === 'ascending'){
        for (let i = 1; i < array.length; i++) {
            if (array[i].id < array[i - 1].id) {
              let menor = array[i];
              array[i] = array[i - 1];
              array[i - 1] = menor;
        
              for (let j = i - 1; j >= 1; j--) {
                if (array[j].id < array[j - 1].id) {
                  let menor = array[j];
                  array[j] = array[j - 1];
                  array[j - 1] = menor;
                }
              }
            }
          }
          return array;
        }


        else{
            for (let i = 1; i < array.length; i++) {
                if (array[i].id > array[i - 1].id) {
                  let mayor = array[i];
                  array[i] = array[i - 1];
                  array[i - 1] = mayor;
            
                  for (let j = i - 1; j >= 1; j--) {
                    if (array[j].id > array[j - 1].id) {
                      let mayor = array[j];
                      array[j] = array[j - 1];
                      array[j - 1] = mayor;
                    }
                  }
                }
              }
              return array;
        }
    }








    
export function bubbleDescent(array) {
    
  }