import React from "react";

function About() 
{
    const team = [
        {
            img: "../imgs/1.jpeg",
            name: 'Hady Hassan Saleh',
            id :203161,
        },
        {
            img: "../imgs/2.jpeg",
            name: 'Mohamed Khaled Ahmed',
            id :203115,

        },
        {
            img: "../imgs/3.jpeg",
            name: 'Omar Elwazzery',
            id :203077,
        },
        {
            img: "../imgs/4.jpeg",
            name: 'Yahya Mahmoud',
            id :203165,
        },
        {
            img: "../imgs/5.jpeg",
            name: 'Ahmed Mohamed Attia',
            id :203014,
        },
        {
            img: "../imgs/6.jpeg",
            name: 'Omar Abdelfattah',
            id :203080
        },

];
    return (

        <div class="container-fluid d-flex justify-content-center mt-100">
        <div class="row">
        {team.map((team,key)=>{
            return(
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body text-center"> <img src={team.img} class="rounded-circle" width="200" height="200"/>
                            <h5 class="card-title mt-2 mb-1">{team.name}</h5> <span class="fs-2 mb-3 font-weight-bold">{team.id}</span>
                        </div>
                    </div>
                </div>

                );
                  })}
        </div>
        </div>


    )
    

}
export default About