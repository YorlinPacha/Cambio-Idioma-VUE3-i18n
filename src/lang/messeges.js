//5 despues de crear la carpeta lang y archivo messeges
//Objeto que incluira las diferentes traducciones paras las localizaciones
// que aplicaremos al proyecto
export const messages ={
//6 estructura    
    en:{
        message:{
            //clave: valor (en este caso con variable)
            hello: 'Hello {name} {surname}',
            content: 'We are using i18n package.',
            //Plurales  com ( | se separa el singular y los plurales )
            products: 'No products | One product | {count} Products',
            //Otro caso sin variable
            comments: 'No comments | comment | Comments'
        }
    },
    es:{
        message:{
            hello: 'Hola {name}',
            content: 'Estamos usando el paquete i18n.',
             //Plurales  com ( | se separa el singular y los plurales )
            products: 'No hay productos | Un producto | {count} Productos',
            //Otro caso sin variable
            comments: 'Sin comentarios | Comentario | Comentarios'
        }
    }
    
}

//listo esto, ir a main.ts

//Utliizando variables {name}