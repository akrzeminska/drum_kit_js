const playAnimation = require('./script');

describe('playAnimation', () => { 
  it('should add "pressed" class to active button', () => {

    document.body.innerHTML = `
        <div class="buttons">
            <button class="drum" id="w">
                <div class="shortcut">W</div>
                <div class="sound">clap</div> 
            </button>
        </div>
    `;     
    const currentKey = 'w';
    playAnimation(currentKey);
    const btn = document.getElementById(currentKey);
    expect(btn.classList.contains('pressed')).toBe(true);
  });
});