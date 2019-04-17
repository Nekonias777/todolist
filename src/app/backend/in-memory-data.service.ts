import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITodolist } from '../models/todolist.interface';

export class InMemoryDataService implements InMemoryDbService {

    /**
     * Mocked backend with initials values
     */
    createDb() {
        const todolist: ITodolist[] = [
            {
                id: '0',
                title: 'Todo Test 1',
                description: 'This is the first test',
                date: new Date(),
                status: 'In progress'
            },
            {
                id: '1',
                title: 'Todo Test 2',
                description: 'This is the second test',
                date: new Date(),
                status: 'In progress'
            },
            {
                id: '2',
                title: 'Todo Test 3',
                description: 'This is the third test',
                date: new Date(),
                status: 'In progress'
            }
        ];
        return { todolist };
    }
}
