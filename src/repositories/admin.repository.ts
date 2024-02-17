import { FilterQuery } from "mongoose";

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
  public async findByParamsAndDelete(dto: FilterQuery<ISubscriber>) {
    return await subscriber.deleteOne(dto);
  }

  public async findByParams(dto: FilterQuery<ISubscriber>) {
    return await subscriber.findOne(dto);
  }
}

export const aminRepository = new AdminRepository();
