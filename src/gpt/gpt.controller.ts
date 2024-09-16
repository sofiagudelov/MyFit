import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GptService } from './gpt.service';
import { TranslateDTO } from './dto/tranductorgpt.dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}


  @Post('translate')
  translateText(@Body() translateDTO:TranslateDTO){
    return this.gptService.translate(translateDTO)
  }
  @Post('discussion')
  discuss(@Body() discussionDto){
    return this.gptService.discussion(discussionDto)
  }
  
}
