import React from 'react';
import './Collage.css' ;

function Collage() {

   
    const textbox = {
        position: 'absolute',
        top: '30px',
        right: '10%',
        width: '600px'
    }

    const h1 = {
        fontWeight :'bold',
        textShadow : '0 0 40px #1f1f1f'
    }
    return (
        
        <div>
            
            <div style={textbox}>
                <h1 style={h1}>ВАЛЕРИЯ СЁМИНА</h1>
                <p>Запишитесь на фотосессию через WhatsApp</p>
                <button>Записаться</button>
                
            </div>
        </div>    
  );
}

export default Collage;