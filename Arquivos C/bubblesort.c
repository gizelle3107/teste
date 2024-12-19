#include <stdio.h>

void bubbleSort (int vetor[], int n){
     for(int i = 0; i < n; i++){
         for(int j = 0; j < n; j++){  
           if (vetor[j] > vetor [j + 1]){
                      int temp = vetor[j];
                      vetor[j] = vetor [j +1];
                      vetor [j + 1] = temp;
     
           }
         }   
    }
}     

int main(){
    int vetor[]={5,2,9,1,4,6};
    int n = sizeof(vetor) / sizeof(vetor[0]);
    
    bubbleSort(vetor,n);
    
    printf("Vetor Ordenado: ");
     for(i = 0; i < n; i++){
      printf("%d",vetor[i]);
      }
         
 return 0;   
}