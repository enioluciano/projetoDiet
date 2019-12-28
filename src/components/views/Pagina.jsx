import React from 'react'

import '../css/Landing.css'
import back from '../../assets/img/icons/back.svg'
import logo from '../../assets/img/Logo.svg'


export default props=>


   
      <body className="desktop-bg" id="landing" >

         <div className="desktop-container" id = "desktop-container">
             <nav class="mainNavbar navbar navbar-expand-lg" style={{display: "block"}} >
                 <div className="container">
                    <i class="btn-back back" alt="back"></i>
                    <img src={back} alt="back" class="btn-back"/>
                    <div className="nabbar-brand">
                        <img src={logo} alt="KetoCycle.Diet" className="regular-logo" />
                    </div>                     
                 </div>
             </nav>
                <div className="subheader" style={{display:"block"}}>
                    <div className="progress-bar">

                    </div>
                </div>

            <div className="container">
                <div id="step-1" class="step active" data-mode="question" data-type="familiar_question" data-answer="single">
                    <div class="question">
                        How familiar are you with the Keto diet?
                    </div>
                    <div class="fancy-radio-holder">
                        <input type="hidden" name="answer" value="0" />
                        <div class="fancy-radio btn-single" data-answer="3">
                            Expert
                <div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio btn-single" data-answer="2">
                            I&#039;ve heard a thing or two
                <div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio btn-single" data-answer="1">
                            Beginner
                <div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                    </div>
                    <div class="error-msg"></div>
                </div>


                <div id="step-2" class="step info-slide" style={{display:"none"}} data-mode="question" data-answer="none">
                    <div class="question">
                        What is Keto diet?
                    </div>
                    <p>
                        The ketogenic diet is a very low-carb, high-fat diet. To achieve positive results, this diet has to be very low in carbohydrates, high in dietary fat and include a moderate amount of proteins. This reduction in carbs puts your body into a metabolic state called ketosis. When this happens, your body becomes incredibly efficient at burning fat for energy. Ketogenic diet can cause massive reductions in blood sugar, insulin levels and help with weight loss.
                    </p>
                    <h3 class="question">Benefits of keto diet:</h3>
                    <ul>
                        <li>
                            <i class="la la-check-circle-o"></i>
                            Weight loss
                        </li>
                        <li>
                            <i class="la la-check-circle-o"></i>
                            Reduced blood pressure
                        </li>
                        <li>
                            <i class="la la-check-circle-o"></i>
                            Slower ageing process
                        </li>
                        <li>
                            <i class="la la-check-circle-o"></i>
                            Improved sleep and mood
                        </li>
                        <li>
                            <i class="la la-check-circle-o"></i>
                            Increased energy efficiency
                        </li>
                    </ul>
                    <button class="btn btn-primary btn-next-step">Got it</button>
                </div>

                <div id="step-3" class="step" style={{display:"none"}} data-type="first_question" data-mode="question" data-answer="single">
                    <div class="question">
                        How much time do you have for meal preparation each day?
</div>
                    <div class="fancy-radio-holder">
                        <input type="hidden" name="answer" value="0" />
                        <div class="fancy-radio btn-single" data-answer="1">
                            Up to 30 minutes
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio btn-single" data-answer="2">
                            Up to 1 hour
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio btn-single" data-anser="3">
                            More than 1 hour
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                    </div>
                    <div class="error-msg"></div>
                </div>

                <div class="step" id="step-4" data-type="meat_question" style={{display: "none"}} data-mode="question" data-answer="multiple">
                    <div class="question">
                        Meat
</div>
                    <div class="question-description">
                        Please select which products you would like included in the plan
</div>
                    <div class="fancy-checkbox-holder">
                        <input type="hidden" name="answer" value="0" />
                        <div class="fancy-radio with-icon" data-answer="chicken">
                            <div class="icon">
                                <i class="chicken"></i>
                            </div>
                            Chicken
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="pork">
                            <div class="icon">
                                <i class="pork"></i>
                            </div>
                            Pork
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="beef">
                            <div class="icon">
                                <i class="beef"></i>
                            </div>
                            Beef
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="fish">
                            <div class="icon">
                                <i class="fish"></i>
                            </div>
                            Fish
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="lamb">
                            <div class="icon">
                                <i class="lamb"></i>
                            </div>
                            Lamb
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="veal">
                            <div class="icon">
                                <i class="veal"></i>
                            </div>
                            Veal
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="vegetarian">
                            I am vegetarian
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                    </div>
                    <div class="error-msg"></div>
                    <button class="btn btn-primary btn-next-step">Next</button>
                </div>

                <div class="step" id="step-5" data-type="products_question" style={{display: "none"}} data-mode="question" data-answer="multiple">
                    <div class="question">
                        Products
</div>
                    <div class="question-description">
                        Please select which products you would like included in the plan
</div>
                    <div class="fancy-checkbox-holder">
                        <input type="hidden" name="answer" value="0" />
                        <div class="fancy-radio with-icon" data-answer="onions">
                            <div class="icon">
                                <i class="onions"></i>
                            </div>
                            Onions
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="eggs">
                            <div class="icon">
                                <i class="egg"></i>
                            </div>
                            Eggs
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="nuts">
                            <div class="icon">
                                <i class="nuts"></i>
                            </div>
                            Nuts
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="milk">
                            <div class="icon">
                                <i class="milk"></i>
                            </div>
                            Milk
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="seafood">
                            <div class="icon">
                                <i class="seafood"></i>
                            </div>
                            Seafood
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="goat">
                            <div class="icon">
                                <i class="goat-cheese"></i>
                            </div>
                            Goat cheese
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                    </div>
                    <div class="error-msg"></div>
                    <button class="btn btn-primary btn-next-step">Next</button>
                </div>

                <div class="step" id="step-6" data-type="products_question2" style={{display: "none"}} data-mode="question" data-answer="multiple">
                    <div class="question">
                        Products
</div>
                    <div class="question-description">
                        Please select which products you would like included in the plan
</div>
                    <div class="fancy-checkbox-holder">
                        <input type="hidden" name="answer" value="0" />
                        <div class="fancy-radio with-icon" data-answer="mushrooms">
                            <div class="icon">
                                <i class="mushroom"></i>
                            </div>
                            Mushrooms
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="cheese">
                            <div class="icon">
                                <i class="cheese"></i>
                            </div>
                            Cheese
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="butter">
                            <div class="icon">
                                <i class="butter"></i>
                            </div>
                            Butter
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="avocado">
                            <div class="icon">
                                <i class="avocado"></i>
                            </div>
                            Avocados
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="olives">
                            <div class="icon">
                                <i class="olives"></i>
                            </div>
                            Olives
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="capers">
                            <div class="icon">
                                <i class="capers"></i>
                            </div>
                            Capers
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio with-icon" data-answer="coconut">
                            <div class="icon">
                                <i class="coconut"></i>
                            </div>
                            Coconut
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                    </div>
                    <div class="error-msg"></div>
                    <button class="btn btn-primary btn-next-step">Next</button>
                </div>
                <div id="step-7" class="step" data-type="howactive_question" style={{display: "none"}} data-mode="question" data-answer="single">
                    <div class="question">
                        How physically active are you?
</div>
                    <div class="fancy-radio-holder">
                        <input type="hidden" name="answer" value="0" />
                        <div class="fancy-radio btn-single" data-answer="3">
                            Workout hero (3-5 workouts / week)
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio btn-single" data-answer="2">
                            Light-mode (1-2 workouts /week)
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio btn-single" data-answer="1">
                            A newbie (Just starting)
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                    </div>
                    <div class="error-msg"></div>
                </div>
                <div id="step-8" class="step" style={{display: "none"}} data-type="willing_question" data-mode="question" data-answer="single">
                    <div class="question">
                        How willing are you to lose weight?
</div>
                    <div class="fancy-radio-holder">
                        <input type="hidden" name="answer" value="0" />
                        <div class="fancy-radio btn-single" data-answer="1">
                            I just want to try the Keto diet
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                        <div class="fancy-radio btn-single" data-answer="2">
                            I want to try it and lose some weight
<div class="status"></div>
                            <div class="status-icon">+</div>
                        </div>
                        <div class="fancy-radio btn-single" data-answer="3">
                            I want to lose the maximum amount of weight
<div class="status"></div>
                            <div class="status-icon">-</div>
                        </div>
                    </div>
                    <div class="error-msg"></div>
                </div>
                <div id="step-9" class="step" style={{display: "none"}} data-type="units_question" data-mode="question">
                    <div class="units-toggler">
                        <button class="btn " data-type="imperial">Imperial</button>
                        <button class="btn  active " data-type="metric">Metric</button>
                    </div>
                    <div class="question">Measurements</div>
                    <div class="input-holder">
                        <input id="age-value" type="number" name="age" placeholder="Age" />
                        <div class="units">years</div>
                    </div>
                    <div class="metric-height">
                        <div class="input-holder">
                            <input id="metric-height-value" type="number" name="height" placeholder="Height" />
                            <div class="units height">cm</div>
                        </div>
                    </div>
                    <div class="imperial-height row" style={{display: "none"}}>
                        <div class="col-xs-6">
                            <div class="input-holder">
                                <input id="feet-value" type="number" name="height" placeholder="Ft" />
                                <div class="units height">ft</div>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div class="input-holder">
                                <input id="inch-value" type="number" name="height" placeholder="In" />
                                <div class="units height">in</div>
                            </div>
                        </div>
                    </div>
                    <div class="input-holder">
                        <input id="weight-value" type="number" name="weight" placeholder="Weight (kg)" />
                        <div class="units weight"> kg </div>
                    </div>
                    <div class="input-holder">
                        <input id="targetWeight-value" type="number" name="target_weight" placeholder="Target weight (kg)" />
                        <div class="units weight"> kg </div>
                    </div>
                    <div class="error-msg"></div>
                    <button class="btn btn-primary btn-next-step">Next</button>
                </div>
            </div>
        </div>
        
          
          
        

      </body>

      