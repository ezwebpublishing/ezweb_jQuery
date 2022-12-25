const trigger = new ScrollTrigger.default({
  trigger: {
        once: false,
        offset: {
            element: {
                x: 0,
                y: 0.2                
            }
        },
        toggle: {
            class: {
                in: 'animateIn', 
                out: 'animateOut'
            }
    		}
		}
});
trigger.add('[data-trigger]');