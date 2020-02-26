const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
   }
   
   cashWithdrawal(300, 50449921);
   cashWithdrawal(30, 50449921);
   cashWithdrawal(200, 50447921);

   // coffee order
   const  coffeeorder  =(size, type) => {
    console.log (`coffee order ${size, type }`);
    }
    coffeeorder ('large', 'latee')
    coffeeorder ( "small", "milkycoffee")
    coffeeorder ("medium", "americano")

    //name age

    const aboutme =(name, age, favouriescolour ) => {
        console. log (`my name is ${name} my ${age}years old my favouries is ${favouriescolour}`)
    }
    aboutme("barry","59","Red")

    //Challnage 2
    const sandwhich=(filling1, filling2 ) =>{
        console.log(`my sandwhich ${filling1} ${filling2}`)

    }
    sandwhich ("chesse", "chicken")
    // activit1

   let  orderNum = 0;
    const takeorder=(topping,topping1, )=>{
        console. log(`pizza with ${ topping}and ${topping1}`)
        orderNum ++
    }
        takeorder("pineapple, ckicken")

        //activitl2
       
       let pinnumber=4532
       let balianc=300
        const bank = (enteerpin,requestfuds )=>{
            if(pinnumber != enteerpin){
                console.log("wrongcode")
            }
            else if(balianc<requestfuds){
                console. log("not a enoth funds")
            
            }
            else if(pinnumber==enteerpin && requestfuds<=balianc){
                console.log("you get money")
            }

        }
        bank(4532,250)
        bank(7689,250)
        bank(4532,1000)

        //activit3

        function divied(num1, num2, ){
            return num1/num2
        }
console. log(divied(8,2))

function subtrction(num1, num2,){
    return num1*num2
} 
console.log(subtrction(6,2))




        
    
