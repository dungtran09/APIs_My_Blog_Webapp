import { Response } from 'express';
import { User } from 'src/modules/users/entities';

interface ResWidthUser extends Response {
  user: User;
}

export default ResWidthUser;
