import { IsString, IsOptional, ValidateNested } from "class-validator";

class CreateAddressDto {
  @IsString()
  public city: string;

  @IsString()
  public street: string;

  @IsString()
  public country: string;
}

class CreateUserDto {
  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;

  @IsOptional() // Marks the property as optional
  @ValidateNested() // Specifies that the property should be validated as a nested object
  public address?: CreateAddressDto; // Declares the address property, which is optional and may contain a nested object
}
