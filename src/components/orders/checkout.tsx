import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Checkout_card from '../components/Checkout_card' ;

 const [ user , setuser ] = useState(null);
 const [ orders , setorders ] = useState (null) ;

 useEffect ( () => {

    axios.get("https://qbc9.liara.run/api/orders/mine").then(Response => {
        setorders(Response.data) ;
    })

    axios.get("https://qbc9.liara.run/api/users/profile").then(Response => {
        setuser(Response.data);
    })

 })





  


/////////////////////////////////


const Checkout = () => {
   return(


    <div className= "w-[1514px] flex flex-row gap-[56px] h-screen relative  top-[97px] right-[211px]  ">



        <div id="1nd" className="w-[909px] h-[909px] border-[#3F4043] gap-[10px] p-[24px] border-[1px] flex flex-col ">
            <div className="flex flex-col w-[861px] h-[861px] gap-[32px] " >

        
                <div className="flex flex-row justify-between pt-[8px] pb-[8px] border-b-[1px] w-[861px] h-[40px] ">
                    <div className="flex flex-row gap-[16px]">
                        <h4 className="w-[] h-[24px]font-[400] text-[#FFFFFF] align-middle text-center text-[16px] tracking-[0]">   عکس</h4>
                        <h4 className="w-[250px] h-[24px] font-[400] text-[#FFFFFF] align-middle text-center text-[16px] tracking-[0]"> نام محصول</h4>
                    </div>
                    
                        <h4 className="font-[400] text-[#FFFFFF] align-middle text-center text-[16px] tracking-[0]"> تعداد</h4>
                        <h4 className="font-[400] text-[#FFFFFF] align-middle text-center text-[16px] tracking-[0]"> قیمت</h4>
                        <h4 className="font-[400] text-[#FFFFFF] align-middle text-center text-[16px] tracking-[0]">قیمت نهایی</h4>
                </div>
                
                <div className=" flex flex-col justify-between">

                  <Checkout_card>
                    
                    
                     
                    

                    
                    

                </div>

                


            </div>
        </div>
        
        

         <div  id="2nd" className="flex  flex-col gap-[32px]">
            <div className="flex flex-col gap-[24px] ">

                <h3 className=" font-[500] text-[20px] text-[#FFFFFF] tracking-[0]  align-middle">آدرس دریافت</h3>

                <div className="flex flex-col gap-[24px]">
                    <p className=" text-[#DB2777]  text-[16px] font-[700] tracking-[0]  align-middle" >شماره سفارش : <strong className=" font-[400] text-[#FFFFFF] align-middle text-[16px] tracking-[0]">    {}</strong></p>
                    <p className=" text-[#DB2777]  text-[16px] font-[700] tracking-[0]  align-middle">نام :<strong className=" font-[400] text-[#FFFFFF] align-middle text-[16px] tracking-[0]">    {user.username}</strong></p>
                    <p className=" text-[#DB2777]  text-[16px] font-[700] tracking-[0]  align-middle">ایمیل :<strong className=" font-[400] text-[#FFFFFF] align-middle text-[16px] tracking-[0]">    {user.email}</strong></p>
                    <p className=" text-[#DB2777]  text-[16px] font-[700] tracking-[0]  align-middle">آدرس :<strong className=" font-[400] text-[#FFFFFF] align-middle text-[16px] tracking-[0]">     {orders.shippingAddres.addres}</strong></p>
                    <p className=" text-[#DB2777]  text-[16px] font-[700] tracking-[0]  align-middle">روش پرداخت :<strong className=" font-[400] text-[#FFFFFF] align-middle text-[16px] tracking-[0]">  درگاه بانک سامان </strong></p>
                </div>
                
                <div className="w-[549px] h-[40px] rounded-[4px] pt-[8px] pr-[10px] pb-[8px] pl-[10px]  border-[#3F4043] border-[1px] gap-[10px] bg-[#1F2937]">

                    <p className=" text-[16px] tracking-[0]s" >Status </p>

                </div>
              
            </div>

            <div className="flex flex-col gap-[24px]">
                <h3  className=" font-[500] text-[20px] text-[#FFFFFF] tracking-[0]  align-middle" >خلاصه خرید</h3>

                <div className="flex flex-col gap-[16px]">
                    <div className="flex flex-row w-[549px] h-[24px] justify-between">
                        <p className="  text-[16px] font-[700] tracking-[0]  align-middle text-[#9CA3AF]">قیمت محصولات :</p>
                        <p className="font-[400] text-[#FFFFFF] align-middle text-[16px] tracking-[0]">{orders.itemsPrice}</p>
                    </div>

                    <div className="flex flex-row w-[549px] h-[24px] justify-between">
                       <p className=" text-[16px] font-[700] tracking-[0]  align-middle text-[#9CA3AF]">هزینه ارسال :</p>
                       <p className=" font-[400] text-[#FFFFFF] align-middle text-[16px] tracking-[0]">{orders.taxPrice}</p>
                    </div>

                    <div className="flex flex-row w-[549px] h-[24px] justify-between">
                        <p className=" text-[16px] font-[700] tracking-[0]  align-middle text-[#9CA3AF] ">مالیات :</p>
                        <p className=" font-[400] text-[#FFFFFF] align-middle text-[16px] tracking-[0]">{orders.shippingPrice}</p>
                    </div>

                    <div className="flex flex-row w-[549px] h-[24px] justify-between">
                         <p className="text-[16px] font-[700] tracking-[0]  align-middle text-[#9CA3AF]">مبلغ نهایی :</p>
                         <p className=" font-[400] text-[#FFFFFF] align-middle text-[16px] tracking-[0] ">{orders.totalPrice}</p>
                    </div>
                  


                    
                    
                   
                </div>
            </div>
            
            <button className="w-[549px] h-[48px] items-center bg-[#DB2777] rounded-[9999px] font-[500] text-[20px] text-[#FFFFFF] tracking-[0]  align-middle justify-center">پرداخت</button>
            
        </div> 
    </div>


   )

}


export default Checkout 
