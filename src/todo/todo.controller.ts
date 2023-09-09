import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get()
  getTodos() {
    console.log('Recuperer la liste des todos');
    return 'La liste des Todos';
  }

  @Post()
  addTodos() {
    console.log('Ajouter un todo la liste des todos');
    return 'Add TODO';
  }

  @Delete()
  deletteTodos() {
    console.log('Supprimer un todo la liste des todos');
    return 'Delete TODO';
  }

  @Put()
  modifierTodos() {
    console.log('Modifier un todo la liste des todos');
    return 'Update TODO';
  }
}
