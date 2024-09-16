import { Injectable, NotFoundException } from '@nestjs/common';
import OpenAI from 'openai';
import { TranslateDTO } from './dto/tranductorgpt.dto';
import { translateUseCase } from './usecases/translate.use-case';
import { DiscussionDto } from './dto/discussion.dto';
import { prosConsDicusserUseCase } from './usecases/discussion.usercase';

@Injectable()
export class GptService {
  private openai=new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  async translate({prompt,lang}:TranslateDTO){
    return await translateUseCase(this.openai,{prompt,lang})
  }
  async discussion({prompt}:DiscussionDto){
    return await prosConsDicusserUseCase(this.openai,{prompt})
  }

}
