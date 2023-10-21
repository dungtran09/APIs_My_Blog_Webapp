import { Request } from 'express';
import { User } from 'src/modules/users/entities';

interface ReqWidthUser extends Request {
  user: User;
}

export default ReqWidthUser;
