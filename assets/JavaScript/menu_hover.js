$(document).ready(function()
{
   let get_element_lists = document.querySelectorAll('.header-under-menu-child');
   
    get_element_lists.forEach((get_element_list)=>
        {

            
    get_element_list.addEventListener("mouseover",function()
    {
        
        get_element_list.lastElementChild.classList.add("active");
        get_element_list.lastElementChild.addEventListener("mouseover",function()
    {
        
        get_element_list.lastElementChild.classList.add("active");
    })
    })
    
    get_element_list.addEventListener("mouseout",function()
    {
        
        get_element_list.lastElementChild.classList.remove("active");
    })
    
    
    
})
})
