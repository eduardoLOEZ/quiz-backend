import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';


@Module({
  imports: [
    UsersModule,
    QuestionsModule,
    MongooseModule.forRoot(
      'mongodb+srv://loezaali39:yM0PTJhgd4XY613c@cluster0.bt7jhbx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      {
        autoCreate: true, // Crear nuevas colecciones automáticamente (si no existen)
        autoIndex: true, // Crear índices automáticamente para mejorar el rendimiento de las consultas
      },
    ),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}