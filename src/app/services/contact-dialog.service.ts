import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from "@angular/core";
import { ContactDialogComponent } from "../modals/contact-dialog/contact-dialog.component";


@Injectable({
    providedIn: 'root'
})
export class ContactDialogService {
    dialogComponentRef: ComponentRef<ContactDialogComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {}

  public open(title: string, message: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ContactDialogComponent);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;
    this.dialogComponentRef.instance.title = title;
    this.dialogComponentRef.instance.message = message;
    this.dialogComponentRef.instance.open();
  }

  public close() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }
}