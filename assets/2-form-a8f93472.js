const e={email:"",message:""},t=document.querySelector(".feedback-form"),o=t.querySelector('input[name="email"]'),r=t.querySelector('textarea[name="message"]');document.addEventListener("DOMContentLoaded",()=>{const a=localStorage.getItem("feedback-form-state");if(a){const s=JSON.parse(a);e.email=s.email||"",e.message=s.message||"",o.value=e.email,r.value=e.message}});t.addEventListener("input",a=>{const{name:s,value:m}=a.target;e[s]=m.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form submitted with data:",e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.reset()});
//# sourceMappingURL=2-form-a8f93472.js.map
