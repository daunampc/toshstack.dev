import { UserEntity } from '@server/modules/users/entities/user.entity';
import { ClsServiceManager } from 'nestjs-cls';

export class ContextProvider {
  private static readonly nameSpace = 'request';

  private static readonly authUserKey = 'user_key';

  private static get<T>(key: string) {
    const store = ClsServiceManager.getClsService();
    return store.get<T>(ContextProvider.getKeyWithNameSpace(key));
  }

  private static set<T>(key: string, value: unknown) {
    const store = ClsServiceManager.getClsService();
    return store.set<T>(ContextProvider.getKeyWithNameSpace(key), value);
  }
  private static getKeyWithNameSpace(key: string) {
    return `${ContextProvider.nameSpace}.${key}`;
  }

  static setAuthUser(user: UserEntity): void {
    ContextProvider.set(ContextProvider.authUserKey, user);
  }

  static getAUthUser(): UserEntity | null {
    return ContextProvider.get<UserEntity>(ContextProvider.authUserKey);
  }
}
