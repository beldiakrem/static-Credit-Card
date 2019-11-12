import React from 'react'
import Puce from "./puce.png"
import Master_Card from "./master-card.png"
import Visa_Card from "./visa-card.jpg"
import Fleche from "./fleche.png"

const Credit_Card = () => {

    return (<div className="cart">
        <div className="titre">
            <h1> CREDIT CARD  </h1>
        </div>
        <div className="sous-titre">
            <div className="gauche">
                <div className="puce">
                    <img src={Puce}></img>
                </div>

                <div className="num">
                    <div className="back">
                        <p> 7253 3256 7859 1245 </p>
                    </div>
                </div >
                <div className="code-date">
                    <div className="code">
                        <p> 5422 </p>
                    </div>
                    <div className="date" >
                        <div className="p-date">
                            <p> MONTH/YEAR</p>
                            <h1> 11/50 </h1>
                            <div className="">
                                <div className="valid">
                                    <div className="thru-valid">
                                    <p> VALID </p> <p id="thru"> THRU </p>
                                    </div>
                                    <div className="image">
                                    <img src={Fleche}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nom">
                    <p> AKREM BELDI </p>
                </div>
            </div>
            <div className="droit">
                <div className="cards">
                    <div className="master_card">
                        <img src={Master_Card}></img>
                    </div>
                    <div className="visa-card">
                        <img src={Visa_Card}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>)

}




export default Credit_Card