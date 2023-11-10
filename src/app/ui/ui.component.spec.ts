import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UiComponent } from "./ui.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("Ui Addition - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Suma

  it("Should call addition method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.addition();
    result = component.result;

    // Assert
    expect(result).toBe(4);
  });

  it("Should set operator1 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;

    // Act
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;

    // Act
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });

  it("should add operator1 and operator2 when i click the addition button ", () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css(".addition-button"));

    // Act
    additionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(7.5);
  });

  it("Should render sum in result div", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.addition();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("10");
  });

  //Resta
  it("Should call subtraction method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 5;
    component.operator2 = 2;

    // Act
    component.substraction();
    result = component.result;

    // Assert
    expect(result).toBe(3);
  });

  it("should subtract operator2 from operator1 when I click the subtraction button ", () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let subtractionButton = fixture.debugElement.query(
      By.css(".substraction-button")
    );

    // Act
    subtractionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(2.5);
  });

  it("Should render difference in result div", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 2;

    // Act
    component.substraction();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("3");
  });

  it("Should call multiplication method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 3;
    component.operator2 = 4;

    // Act
    component.multiplication();
    result = component.result;

    // Assert
    expect(result).toBe(12);
  });

  it("should multiply operator1 and operator2 when I click the multiplication button ", () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let multiplicationButton = fixture.debugElement.query(
      By.css(".multiplication-button")
    );

    // Act
    multiplicationButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(12.5);
  });

  it("Should render product in result div", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 2;

    // Act
    component.multiplication();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("10");
  });
  //Division
  it("Should call division method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 6;
    component.operator2 = 2;

    // Act
    component.division();
    result = component.result;

    // Assert
    expect(result).toBe(3);
  });

  it("should divide operator1 by operator2 when I click the division button ", () => {
    // Arrange
    component.operator1 = 10;
    component.operator2 = 2;
    let divisionButton = fixture.debugElement.query(By.css(".division-button"));

    // Act
    divisionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(5);
  });

  it("Should render quotient in result div", () => {
    // Arrange
    component.operator1 = 8;
    component.operator2 = 2;

    // Act
    component.division();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("4");
  });

  // Potencia (exp)
  it("Should call exp method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 3;

    // Act
    component.exp();
    result = component.result;

    // Assert
    expect(result).toBe(8);
  });

  it("should calculate operator1 to the power of operator2 when I click the exp button ", () => {
    // Arrange
    component.operator1 = 2;
    component.operator2 = 4;
    let expButton = fixture.debugElement.query(By.css(".exp-button"));

    // Act
    expButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(16);
  });

  it("Should render result of exp in result div", () => {
    // Arrange
    component.operator1 = 3;
    component.operator2 = 2;

    // Act
    component.exp();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("9");
  });
  // Raíz cuadrada
  it("Should call sqrt method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 16;

    // Act
    component.sqrt();
    result = component.result;

    // Assert
    expect(result).toBe(4);
  });

  it("Should calculate operator1 root when I click the sqrt button", () => {
    // Arrange
    component.operator1 = 9;

    // Act
    component.sqrt();
    const result = component.result;

    // Assert
    expect(result).toBe(3);
  });
  it("Should render square root in result div", () => {
    // Arrange
    component.operator1 = 25;

    // Act
    component.sqrt();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("5");
  });
});
