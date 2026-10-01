(() => {
 const story=document.querySelector('.home-story');if(!story)return;
 const scenes=[...story.querySelectorAll('.scroll-scene')];
 const toggle=story.querySelector('.motion-toggle');
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 const mobile=matchMedia('(max-width: 700px)');
 let paused=false,frame=0;
 const clamp=(n,min=0,max=1)=>Math.max(min,Math.min(max,n));
 function draw(){frame=0;if(paused||reduce.matches)return;const height=innerHeight;
  for(const scene of scenes){const rect=scene.getBoundingClientRect();if(rect.bottom<0||rect.top>height)continue;
   const progress=clamp(-rect.top/Math.max(1,rect.height-height));
   // Photos move both towards and away from the viewer. Only the photo blurs.
   const enter=clamp((rect.top-height*.65)/(-height*.65));
   const travel=mobile.matches?.07:.2;
   const scale=scene.dataset.zoom==='in'?1+travel*progress:1+travel*(1-progress);
   const blur=mobile.matches?0:Math.max((1-enter)*7,clamp((progress-.8)/.2)*5);
   scene.style.setProperty('--scene-scale',scale.toFixed(3));
   scene.style.setProperty('--scene-blur',blur.toFixed(2)+'px');
   scene.style.setProperty('--copy-shift',((1-enter)*35).toFixed(1)+'px');
   scene.style.setProperty('--copy-opacity',(.4+.6*enter).toFixed(3));
   scene.style.setProperty('--scene-progress',String(progress));
  }
 }
 function schedule(){if(!frame&&!paused&&!reduce.matches)frame=requestAnimationFrame(draw)}
 function configure(){const disabled=paused||reduce.matches;story.classList.toggle('motion-static',disabled);toggle.disabled=reduce.matches;toggle.setAttribute('aria-pressed',String(disabled));toggle.textContent=reduce.matches?'Reduced motion enabled':paused?'Enable scroll effects':'Pause scroll effects';if(disabled){cancelAnimationFrame(frame);frame=0;for(const scene of scenes)scene.removeAttribute('style')}else schedule()}
 toggle.addEventListener('click',()=>{paused=!paused;configure()});
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule,{passive:true});
 reduce.addEventListener('change',configure);mobile.addEventListener('change',schedule);configure();
})();
