import { subscriber } from "../models/subscriber.model";
import { ISubscriber } from "../types/user.interface";

class AdminRepository {
  public async getAllSubscribers() {
    return await subscriber.find();
  }
  public async deleteSubscriber(id: string) {
    return await subscriber.findByIdAndDelete(id);
  }
  public async createSubscriber(dto: ISubscriber) {
    return await subscriber.create(dto);
  }
}

export const aminRepository = new AdminRepository();
