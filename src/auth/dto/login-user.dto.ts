import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LogUserDto {
  @IsEmail({}, { message: 'Vous devez fournir une adresse email valide.' })
  email: string;

  @IsNotEmpty()
  @MinLength(8, {
    message: 'Votre mot de passe doit faire plus de 8 caractères.',
  })
  password: string;
}
