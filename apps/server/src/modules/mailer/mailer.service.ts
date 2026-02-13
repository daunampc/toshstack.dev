import { Injectable } from '@nestjs/common';
import { MailerService as MailerServiceFs } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';
import { UserEntity } from '../users/entities/user.entity';
import { VerifyOtpInput } from './types/mailer.types';
import { emailHtml } from '@toshstack/email';
import { UserRole } from '@toshstack/domain';
@Injectable()
export class MailerService {
  constructor(private readonly mailerService: MailerServiceFs) {}

  async confirmRegister(
    to: string,
    user: UserEntity,
  ): Promise<SentMessageInfo> {
    return await this.mailerService.sendMail({
      to,
      subject: 'Welcome to Startup',
      template: 'welcome',
      context: {
        title: 'Welcome',
        name: user.email.split('@')[0],
        year: 2026,
        unsubscribe_url: 'https://toshstack.dev/unsubscribe',
      },
    });
  }

  async verifyOtp(input: VerifyOtpInput): Promise<SentMessageInfo> {
    return await this.mailerService.sendMail({
      to: input.user.email,
      subject: 'Your OTP code',
      template: 'verify-otp',

      context: {
        otp: input.otp.code,
        expireMinutes: 2,
        year: new Date().getFullYear(),
        name: input.user.profile.display_name,
      },
    });
  }
  async welcomeRegister(
    full_name: string,
    email: string,
  ): Promise<SentMessageInfo> {
    if (!full_name || !email) return false;
    const html = await emailHtml({
      fullName: full_name,
      email: email,
      unsubscribeUrl: '124',
    });
    return await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to Toshstack.dev',
      html: html,
    });
  }
}
