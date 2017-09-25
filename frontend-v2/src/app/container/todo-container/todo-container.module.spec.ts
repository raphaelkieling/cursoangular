import { TodoContainerModule } from './todo-container.module';

describe('TodoContainerModule', () => {
  let todoContainerModule: TodoContainerModule;

  beforeEach(() => {
    todoContainerModule = new TodoContainerModule();
  });

  it('should create an instance', () => {
    expect(todoContainerModule).toBeTruthy();
  });
});
