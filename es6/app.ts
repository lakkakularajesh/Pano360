import {bootstrap, Component, View, Input} from 'angular2/angular2';

@Component({
    selector : 'cardboard-gl'
})
@View({
    template: `
        <a-scene>
          <a-sky src="panoUrl" rotation="0 -130 0"></a-sky>
        </a-scene>
        `
})
class App {
    @Input() panoUrl: string;

    constructor() {
    }
}

bootstrap(App);
