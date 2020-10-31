import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const repository = getRepository(Transaction);

    const transaction = await repository.findOne(id);

    if (!transaction) {
      throw new AppError('There are any transactions with this id');
    }

    await repository.remove(transaction);
  }
}

export default DeleteTransactionService;
