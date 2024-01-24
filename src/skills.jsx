import React, { useState } from 'react';
import './skills.css'

const Skills = () => {
  const [isTrue, setIsTrue] = useState(false)
  return (
    <>
    <div className='heading' onClick={()=>setIsTrue(!isTrue)}>
      <h4>Select a Skill</h4>
      
    </div>

    <div style={{display:isTrue?'block':'none'}}>
    <div className='flexy-box'>

    <div className='cards'>
      <img src='/officer.png' className='img1' alt='PHP' />
      <p className='titles'>Chief Technical <br/>Officer (CTO)</p>
      </div>

      <div className='cards'>
      <img src='/secuirity.png' className='img1' alt='PHP' />
      <p className='titles'>Chief Information <br/> Secuirity Officer (CISO)</p>
      </div>

      <div className='cards'>
      <img src='/info.png' className='img1' alt='PHP' />
      <p className='titles'>Chief Information <br/>Officer (CIO)</p>
      </div>  

      
    </div>

    <div className='flex-box'>

      <div className='card'>
      <img src='/php.png' className='img' alt='PHP' />
      <p className='title'>PHP</p>
      </div>

      <div className='card'>
      <img src='/react.png' className='img' alt='react' />
      <p className='title'>React JS</p>
      </div>

      <div className='card'>
      <img src='/nodejs.png' className='img' alt='node' />
      <p className='title'>Node js</p>
      </div>

      <div className='card'>
      <img src='/python.png' className='img' alt='python' />
      <p className='title'>Python</p>
      </div>

      <div className='card'>
      <img src='/java.png' className='img' alt='Java' />
      <p className='title'>Java</p>
      </div>

      <div className='card'>
      <img src='/aws.png' className='img' alt='AWS' />
      <p className='title'>AWS</p>
      </div>

      <div className='card'>
      <img src='/postgre.png' className='img' alt='SQL' />
      <p className='title'>PostgreSQL</p>
      </div>

      <div className='card'>
      <img src='/rails.png' className='img' alt='ruby' />
      <p className='title'>Ruby on rails</p>
      </div>

      <div className='card'>
      <img src='/machine.png' className='img' alt='learning' />
      <p className='title'>Machine Learning</p>
      </div>

      <div className='card'>
      <img src='/android.png' className='img' alt='android' />
      <p className='title'>Android</p>
      </div>

      <div className='card'>
      <img src='/ios.png' className='img' alt='IOS' />
      <p className='title'>IOS</p>
      </div>

      <div className='card'>
      <img src='/flutter.png' className='img' alt='Flutter' />
      <p className='title'>Flutter</p>
      </div>

      <div className='card'>
      <img src='/django.png' className='img' alt='Django' />
      <p className='title'>Django</p>
      </div>

      <div className='card'>
      <img src='/angular.png' className='img' alt='angular' />
      <p className='title'>Angular</p>
      </div>

      <div className='card'>
      <img src='/js.png' className='img' alt='Javascript' />
      <p className='title'>Javascript</p>
      </div>

      <div className='card'>
      <img src='/native.png' className='img' alt='native' />
      <p className='title'>React Native</p>
      </div>

      <div className='card'>
      <img src='/c.png' className='img' alt='C' />
      <p className='title'>C#</p>
      </div>

      <div className='card'>
      <img src='/swift.png' className='img' alt='swift' />
      <p className='title'>Swift</p>
      </div>

      <div className='card'>
      <img src='/fullstack.png' className='img' alt='full' />
      <p className='title'>FullStack</p>
      </div>

      <div className='card'>
      <img src='/mean.png' className='img' alt='Mean' />
      <p className='title'>Mean</p>
      </div>

      <div className='card'>
      <img src='/go.png' className='img' alt='Golang' />
      <p className='title'>Golang</p>
      </div>

      <div className='card'>
      <img src='/azure.png' className='img' alt='azure' />
      <p className='title'>Azure</p>
      </div>
      
      <div className='card'>
      <img src='/mobile.png' className='img' alt='mobile' />
      <p className='title'>Mobile dev</p>
      </div>

      <div className='card'>
      <img src='/html.png' className='img' alt='PHP' />
      <p className='title'>PHP</p>
      </div>

      <div className='card'>
      <img src='/ui.png' className='img' alt='Ui' />
      <p className='title'>Ui Ux</p>
      </div>

      <div className='card'>
      <img src='/word.png' className='img' alt='press' />
      <p className='title'>Wordpress</p>
      </div>

      <div className='card'>
      <img src='/others.png' className='img' alt='others' />
      <p className='title'>Others</p>
      </div>

      <div className='card'>
      <img src='/not.png' className='img' alt='sure' />
      <p className='title'>Not Sure</p>
      </div>

    </div>
    </div>

    </>
  );
};

export default Skills;
