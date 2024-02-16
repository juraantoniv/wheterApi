import { ApiError } from "../errors/api.error";
import { aminRepository } from "../repositories/admin.repository";
import { ISubscriber } from "../types/user.interface";

class AdminService {
  public async deleteSubscribeUser(id: string) {
    try {
      await aminRepository.deleteSubscriber(id);
    } catch (e) {
      console.log(e);
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
