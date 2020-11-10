import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';

import { ContractComponent } from './contracts.component';

describe('ContractsComponent', () => {
  
  let component: ContractComponent;
  let component0: AppComponent;
  let fixture: ComponentFixture<ContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Pasra comprobar que el conta si fué creado
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //if('La variable title debe contener el nombre del proyecto')
  it('La variable email debe contener @ ', ()=>{
    let mvar : String = component0['email'];

    expect(mvar).toEqual('UnitTest')
  })


});
