let btn = document.getElementById("bttnSubmit");

btn.addEventListener('click',function listner() {
    let inputNumber = document.getElementById('number').value;
    let outputNumber = document.getElementById('output');
    const toRoman = (input)=>
    {
        let num = parseInt(input);
        let roman ='';
        while(num > 0)
        {
            if(num >= 1000)
            {
                num = num - 1000;
                roman = roman + 'M';
            }
            else if(num < 1000 && num >= 900)
            {
                num = num - 900;
                roman = roman + 'CM';
            }
            else if(num < 900 && num >= 500)
            {
                num = num - 500;
                roman = roman + 'D';
            }
            else if(num < 500 && num >= 400)
            {
                num = num - 400;
                roman = roman + 'CD';
            }
            else if(num < 400 && num >= 100)
            {
                num = num - 100;
                roman = roman + 'C';
            }
            else if(num < 100 && num >= 90)
            {
                num = num - 90;
                roman = roman + 'XC';
            }
            else if(num < 90 && num >= 50)
            {
                num = num - 50;
                roman = roman + 'L';
            }
            else if(num < 50 && num >= 40)
            {
                num = num - 40;
                roman = roman + 'XL';
            }
            else if(num < 40 && num >= 10)
            {
                num = num - 10;
                roman = roman + 'X';
            }
            else if(num < 10 && num >= 9)
            {
                num = num - 9;
                roman = roman + 'IX';
            }
            else if(num < 9 && num >= 5)
            {
                num = num - 5;
                roman = roman + 'V';
            }
            else if(num < 5 && num >= 4)
            {
                num = num - 4;
                roman = roman + 'IV';
            }
            else if(num < 4 && num >= 1)
            {
                num = num - 1;
                roman = roman + 'I';
            }
        
        }

            return roman;
            
        
    }
    outputNumber.innerHTML=toRoman(inputNumber);
})