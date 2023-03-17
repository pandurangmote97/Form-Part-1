export class Forms {
  private _viewStr = '';
  private _data: FormData = null;
  private _viewContainer = null;
  private controls: Array<FormControl>;
  public setView(container: HTMLElement, view: string): void {
    this._viewStr = view;
    this._viewContainer = container;
  }
  public setData(data: FormData): void {
    this._data = data;
  }
  public getData(): FormData {
    return JSON.parse(JSON.stringify(this._data));
  }
  public run() {
    //View Init start
    this.renderView();
    //View Init Complete

    //Content init start
    for (const fc of Object.keys(this._data.formControls)) {
      console.log(fc);
    }
    //content init complete
  }
  private renderView() {
    // const frag = document.createDocumentFragment();
    // const container = document.createElement('div');
    this._viewContainer.innerHTML = this._viewStr;
    // frag.appendChild(container);
  }
  private getElement(selector: string) {}
  public destroy() {}
}

export class FormData {
  _id = null;
  selectorProp = '';
  dataProp = '';
  formulaProp = '';
  valueProp = '';
  private _data: Array<any> = [];
  private _fcd = {};
  get formControls() {
    return this._fcd;
  }
  mapData(data: Array<any>) {
    this._data = JSON.parse(JSON.stringify(data));
    for (let i = 0, len = this._data.length; i < len; i++) {
      const d = this._data[i];
      if (!this._fcd[d[this.selectorProp]]) {
        this._fcd[d[this.selectorProp]] = new FormControl();
      }
    }
  }

  updateFormConrolReferencees() {}
}

export class FormControl {
  // constructor(_ob: any) {
  //   this.obj = _ob;
  // }
  private nativeEl: HTMLElement;
  // private obj: any;
  get val() {
    // if (this.nativeEl.tagName == 'INPUT') {
    //   return this.nativeEl['value'];
    // } else if (this.nativeEl.tagName == 'SELECT') {
    //   return this.nativeEl['options'][this.nativeEl['selectedIndex']].value;
    // }
    return this.nativeEl['value'];
  }
  set val(val: any) {
    this.nativeEl['value'] = val;
  }
}
