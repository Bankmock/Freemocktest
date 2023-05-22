let emarks = 0; 

 
 
 localStorage.setItem('emarks', emarks);
 let emarked = 0;
 localStorage.setItem('emarked', emarked);
let echecked = 0;
 localStorage.setItem('echecked', echecked);
 var ecorrectanser = 0;
 localStorage.setItem('ecorrectanser', ecorrectanser);
 let ewanser = 0;
 localStorage.setItem('ewanser', ewanser);
var currentTab = 0;
 // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
   
  if (n == (x.length - 1)) {
    document.getElementById("next").style.display = "inline";
  } else if (n == (x.length - 2)) {
    document.getElementById("next").style.display = "inline";
  } 
  //... and run a function that will display the correct step indicator:
  
} 

 function timernnnnn() {
 
   var fiveMinutes = 60 * 20,
       display = document.querySelector('#some_div');
	   
 startTimer(fiveMinutes, display);
 
 
 
 
}

function startTimer(duration, display) {

    var timer = duration, minutes, seconds;

    var n = setInterval(function () {

        minutes = parseInt(timer / 60, 10)

        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer == -1) {
        clearTimeout(n);
        doSomething();
    } else {
        
        timer--;
    }

    }, 1000);

}   
 
  

function nextbtton(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
   
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = n;
  // if you have reached the end of the form...
     
	 
    
  markanser();
  correctanser();
   
   
     
  showTab(currentTab);
    questionchecked();
  
   
}
 
function nextPrev(n) {
  // This function will figure out which tab to dis play
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
   
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab == x.length) {
    // ... the form gets submitted:
     currentTab = 0;
   
  }
  // Otherwise, display the correct tab:
  
   
  
    
  markanser();
  correctanser();
   
   
      checkedopn();
  showTab(currentTab);
    questionchecked();
 
  
   
}

  
 

function doSomething() {
      document.getElementById("regForm").submit() 
     
	 
 
 
}
 
function markanser() {
            const rbs = document.querySelectorAll('input[name="choice"]:checked');
           
            for (const rb of rbs) {
                if (rb.value == 'yes') {
					 
                emarks = emarks + 1;
                
			   localStorage.setItem('emarks', emarks);
                   
            }  else {
 
              emarks = emarks - (0.25);
			  
			  localStorage.setItem('emarks', emarks);
                
				}   
 
         
               }
   
 
        } 
		const bton1 = document.getElementById("sprite-butts1");
  const bton2 = document.getElementById("sprite-butts2");
  const bton3 = document.getElementById("sprite-butts3");
  const bton4 = document.getElementById("sprite-butts4");
  const bton5 = document.getElementById("sprite-butts5");
  const bton6 = document.getElementById("sprite-butts6");
  const bton7 = document.getElementById("sprite-butts7");
  const bton8 = document.getElementById("sprite-butts8");
  const bton9 = document.getElementById("sprite-butts9");
  const bton10 = document.getElementById("sprite-butts10");
  const bton11 = document.getElementById("sprite-butts11");
  const bton12 = document.getElementById("sprite-butts12");
  const bton13 = document.getElementById("sprite-butts13");
  const bton14 = document.getElementById("sprite-butts14");
  const bton15 = document.getElementById("sprite-butts15");
  const bton16 = document.getElementById("sprite-butts16");
  const bton17 = document.getElementById("sprite-butts17");
  const bton18 = document.getElementById("sprite-butts18");
  const bton19 = document.getElementById("sprite-butts19");
  const bton20 = document.getElementById("sprite-butts20");
  const bton21 = document.getElementById("sprite-butts21");
  const bton22 = document.getElementById("sprite-butts22");
  const bton23 = document.getElementById("sprite-butts23");
  const bton24 = document.getElementById("sprite-butts24");
  const bton25 = document.getElementById("sprite-butts25");
  const bton26 = document.getElementById("sprite-butts26");
  const bton27 = document.getElementById("sprite-butts27");
  const bton28 = document.getElementById("sprite-butts28");
  const bton29 = document.getElementById("sprite-butts29");
  const bton30 = document.getElementById("sprite-butts30");
   
		function checkedopn() {
	
   
  
   const rbs = document.querySelectorAll('input[name="choice"]:checked');
            if (currentTab == 1) {
                bton1.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton1.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }
 
 if (currentTab == 2) {
                bton2.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton2.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 3) {
                bton3.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton3.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 4) {
                bton4.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton4.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 5) {
                bton5.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton5.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 6) {
                bton6.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton6.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 7) {
                bton7.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton7.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }
if (currentTab == 8) {
                bton8.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton8.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 9) {
                bton9.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton9.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 10) {
                bton10.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton10.style = "background-position: 0px -264px; color: rgb(255, 255, 255);"; 
                                             }   
                                       }
                                }if (currentTab == 11) {
                bton11.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton11.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 12) {
                bton12.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton12.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 13) {
                bton13.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton13.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 14) {
                bton14.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton14.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 15) {
                bton15.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton15.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 16) {
                bton16.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton16.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 17) {
                bton17.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton17.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 18) {
                bton18.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton18.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 19) {
                bton19.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton19.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 20) {
                bton20.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton20.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 21) {
                bton21.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton21.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 22) {
                bton22.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton22.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 23) {
                bton23.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton23.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 24) {
                bton24.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton24.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 25) {
                bton25.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton25.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 26) {
                bton26.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton26.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 27) {
                bton27.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton27.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 28) {
                bton28.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton28.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                }if (currentTab == 29) {
                bton29.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton29.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                } if (currentTab == 30) {
                bton30.style = 'background-position: 0px -136px; color: rgb(255, 255, 255);';
             for (const rb of rbs) {
                   if (rb.checked == true ) {
                   bton30.style = "background-position: 0px -264px; color: rgb(255, 255, 255);";
                                             }   
                                       }
                                } 
 
 
 
 
 
 
  
 } 
 function marknextPrev(n) {
  // This function will figure out which tab to dis play
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
   
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab == x.length) {
    // ... the form gets submitted:
     currentTab = 0;
   
  }
  // Otherwise, display the correct tab:
  
   
  
    
  markanser();
  correctanser();
   
   
       marked();
  showTab(currentTab);
     
 
  
   
}
 
 function marked() {
	
   
  
   const rbs = document.querySelectorAll('input[name="choice"]:checked');
            if (currentTab == 1) {
                bton1.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
                
   
                                }
 
 if (currentTab == 2) {
                bton2.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
                
                                       
                                }if (currentTab == 3) {
                bton3.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 4) {
                bton4.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 5) {
                bton5.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
            
                                }if (currentTab == 6) {
                bton6.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 7) {
                bton7.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }
if (currentTab == 8) {
                bton8.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 9) {
                bton9.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 10) {
                bton10.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 11) {
                bton11.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 12) {
                bton12.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 13) {
                bton13.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 14) {
                bton14.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 15) {
                bton15.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 16) {
                bton16.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 17) {
                bton17.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 18) {
                bton18.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
           
                                }if (currentTab == 19) {
                bton19.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 20) {
                bton20.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 21) {
                bton21.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 22) {
                bton22.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 23) {
                bton23.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 24) {
                bton24.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 25) {
                bton25.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 26) {
                bton26.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 27) {
                bton27.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 28) {
                bton28.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 29) {
                bton29.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                } if (currentTab == 30) {
                bton30.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                } 
 
 
 
 document.getElementById("stic-marked").innerHTML = emarked;
 
 
  
 } 
 
 
 
 
 
 
 
 
 
 
 
 
 function correctanser() {
            const rbs = document.querySelectorAll('input[name="choice"]:checked');
           
            for (const rb of rbs) {
                if (rb.value == 'yes') {
                          
                      ecorrectanser = ecorrectanser + 1;
                      localStorage.setItem('ecorrectanser', ecorrectanser);
                  }  else {
 
              ewanser = ewanser + 1;
              localStorage.setItem('ewanser', ewanser);
                 
                 }  
             }
		 }
 
 
 
 



const btn = document.getElementById('clear');
        // handle click button
 function clearresponsek() {
            document.querySelector('input[name="choice"]:checked').checked = false;
           
             
        } 
 
 function questionchecked() {
 
   const rbs = document.querySelectorAll('input[name="choice"]:checked');
       for (const rb of rbs) {
                if (rb.checked == true) {
                echecked = echecked + 1;
                localStorage.tchecked = echecked; 
               localStorage.echecked = echecked;
			   document.getElementById("stic-answered").innerHTML = echecked;
                   document.getElementById('quetion').innerHTML = echecked;
      document.querySelector('input[name="choice"]:checked').checked = false;
                }  else {
                 echecked = echecked + 0;
   
               } 
           
    }
		   
		    
         } 
  
 
  
   document.addEventListener("contextmenut", function(event) {
                    event.preventDefault();
 })
  
  
 /*  function firememory() {
   
   
  var firebaseRef = firebase.database().ref();
  var postData = {
	           
             emarks: emarks,
              ecorrectanser: ecanser,
              ewronganser: ewanser,
   
  }
  firebaseRef.child('Student/'+userFullName).update(postData);

    
}
  */ 
 
  /*  <script src="../js/app.js"></script> */
   
   
  