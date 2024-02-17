import { ApiError } from "../errors/api.error";
import { aminRepository } from "../repositories/admin.repository";
import { ISubscriber } from "../types/user.interface";

class AdminService {
  public async deleteSubscribeUser(email: string) {
    try {
      const user = await aminRepository.findByParams({ email: email });

      if (!user) {
        throw new ApiError("User not found", 401);
      }

      await aminRepository.findByParamsAndDelete({ email: email });
    } catch (e) {
      throw new ApiError(e, 401);
    }
  }

  public async getAllSubscribers(): Promise<ISubscriber[]> {
    try {
      return await aminRepository.getAllSubscribers();
    } catch (e) {
      console.log(e);
      throw new ApiError(e, 401);
    }
  }

  public async createSubscribeUser(dto: ISubscriber) {
    try {
      return await aminRepository.createSubscriber(dto);
    } catch (e) {
      console.log(e);
      throw new ApiError(e, 401);
    }
  }
}

export const adminService = new AdminService();
