const input = document.querySelector(".input");
const addBtn = document.querySelector(".ad-btn");
const listaTareas = document.querySelector(".ul");
const empty = document.querySelector(".empty");



addBtn.addEventListener("click",(e)=>{
   e.preventDefault(); //para anular el envio del formulario y evitar q se recarge la pagina al clickear el +

   const tarea = input.value;  //Al clickear se guardara el valor que esta escrito en el input

   if(tarea !== "") { //Si en el input de tarea hay algo escrito
       
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.className = "tareaPorHacer";
      p.textContent = tarea;

      li.appendChild(p); //agrego el p al li
      li.appendChild(borrarTarea()); //Agrego la funcion ya que retrona el boton de "X", si no nunca aparecera
      listaTareas.appendChild(li); //Agrego el li a la ul

      input.value = ""; //Para que luego de agregar tarea, el input quede vacio(se resetee)

      empty.style.display = "none"; //Luego de agregar la tarea, que desaparezca el parrafo de que no hay tareas

   }

   
});


function borrarTarea () {

   //Borrar item por item, muy importante

   const deleteBtn = document.createElement("button"); //creamos un buton para borrar tarea
   deleteBtn.textContent = "X"; //que sea una x
   deleteBtn.className = "delete-btn";

   deleteBtn.addEventListener("click",(e)=>{
      const item = e.target.parentElement; //e.target es el boton que clickeamos, pero queremos borrar el li, que seria el padre de este elemento
      console.log(item);
      
      //La ul de listaTareas es el padre de los li , por lo que borramos los hijos(li-child) y que li queremos borrar
      listaTareas.removeChild(item);

      const items = document.querySelectorAll("li"); //Todos los li
      if(items.length === 0) { //Significa que el li esta vacio
         empty.style.display = "block"; //Que aparezca el texto de que no hay tareas.
      }

   });
   return deleteBtn; //Retornamos el boton para que se agregue la x

}