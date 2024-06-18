import { useDefineApi } from "@/stores/useDefineApi";
import type { BilibiliVideoInfos } from "@/types/Movie";
import type { FileList } from "@/types/Vendor";

// 获取 哔哩哔哩 登录二维码
export const getBiliBiliQRCode = useDefineApi<
  {
    headers: { Authorization: string };
  },
  { url: string; key: string }
>({
  url: "/api/vendor/bilibili/login/qr",
  method: "GET"
});

// 验证 哔哩哔哩 登录二维码
export const veriBiliBiliQRCode = useDefineApi<
  {
    headers: { Authorization: string };
  },
  { status: string }
>({
  url: "/api/vendor/bilibili/login/qr",
  method: "POST"
});

// 获取 哔哩哔哩 人机验证
export const getBiliBiliCaptcha = useDefineApi<
  {
    headers: { Authorization: string };
  },
  {
    token: string;
    gt: string;
    challenge: string;
  }
>({
  url: "/api/vendor/bilibili/login/captcha",
  method: "GET"
});

// 获取 哔哩哔哩 手机验证码
export const getBiliBiliPhoneCode = useDefineApi<
  {
    headers: { Authorization: string };
    data: {
      token: string;
      challenge: string;
      validate: string;
      telephone: string;
    };
  },
  {
    captchaKey: string;
  }
>({
  url: "/api/vendor/bilibili/login/sms/send",
  method: "POST"
});

// 验证 哔哩哔哩 手机验证码
export const veriBiliBiliPhoneCode = useDefineApi<
  {
    headers: { Authorization: string };
    data: {
      telephone: string;
      captchaKey: string;
      code: string;
    };
  },
  any
>({
  url: "/api/vendor/bilibili/login/sms/login",
  method: "POST"
});

// 获取可用的解析接口
export const getVendorBackends = useDefineApi<
  {
    headers: { Authorization: string };
    url: string;
  },
  string[]
>({
  method: "GET"
});

// 解析 哔哩哔哩 视频
export const parseBiliBiliVideo = useDefineApi<
  {
    headers: { Authorization: string };
    data: {
      url: string;
    };
    params?: {
      vendor: string;
    };
  },
  {
    title: string;
    actors: string;
    videoInfos: BilibiliVideoInfos[];
  }
>({
  url: "/api/vendor/bilibili/parse",
  method: "POST"
});

// 获取 哔哩哔哩 账号信息
export const getBiliBiliAccountInfo = useDefineApi<
  {
    headers: { Authorization: string };
  },
  {
    isLogin: boolean;
    info: {
      username: string;
      face: string;
      isVip: boolean;
    };
  }
>({
  url: "/api/vendor/bilibili/me",
  method: "GET"
});

// 退出 哔哩哔哩 登录
export const logoutBiliBili = useDefineApi<{ headers: { Authorization: string } }, any>({
  url: "/api/vendor/bilibili/logout",
  method: "POST"
});

// 获取已经绑定的 AList 账号列表
export const getAListBinds = useDefineApi<
  {
    headers: {
      Authorization: string;
    };
  },
  {
    serverID: string;
    host: string;
  }[]
>({
  url: "/api/vendor/alist/binds",
  method: "GET"
});

// 登录 AList
export const loginAListApi = useDefineApi<
  {
    headers: { Authorization: string };
    data: {
      host: string;
      username: string;
      hashedPassword: string;
    };
  },
  any
>({
  url: "/api/vendor/alist/login",
  method: "POST"
});

// 获取 AList 账号信息
export const getAListAccountInfo = useDefineApi<
  {
    headers: { Authorization: string };
    params: {
      serverID: string;
    };
  },
  {
    isLogin: boolean;
    info: {
      basePath: string;
      id: number;
      permission: number;
      username: string;
    };
  }
>({
  url: "/api/vendor/alist/me",
  method: "GET"
});

// 获取 AList 文件列表
export const getAListFileList = useDefineApi<
  {
    headers: { Authorization: string };
    data: {
      path: string;
    };
    params: {
      page: number;
      max: number;
    };
  },
  FileList
>({
  url: "/api/vendor/alist/list",
  method: "POST"
});

// 退出 AList 登录
export const logoutAList = useDefineApi<
  {
    headers: { Authorization: string };
    data: {
      serverId: string;
    };
  },
  any
>({
  url: "/api/vendor/alist/logout",
  method: "POST"
});

// 获取已经绑定的 Emby 账号列表
export const getEmbyBinds = useDefineApi<
  {
    headers: {
      Authorization: string;
    };
  },
  {
    serverID: string;
    host: string;
  }[]
>({
  url: "/api/vendor/emby/binds",
  method: "GET"
});

// 登录 Emby
export const loginEmbyApi = useDefineApi<
  {
    headers: { Authorization: string };
    data: {
      host: string;
      username: string;
      password: string;
    };
  },
  any
>({
  url: "/api/vendor/emby/login",
  method: "POST"
});

// 获取 Emby 账号信息
export const getEmbyAccountInfo = useDefineApi<
  {
    headers: { Authorization: string };
  },
  {
    isLogin: boolean;
    info: {
      systemUpdateLevel: string;
      operatingSystemDisplayName: string;
      supportsLibraryMonitor: boolean;
      webSocketPortNumber: number;
      canSelfRestart: boolean;
      programDataPath: string;
      itemsByNamePath: string;
      cachePath: string;
      logPath: string;
      internalMetadataPath: string;
      transcodingTempPath: string;
      httpServerPortNumber: number;
      supportsHttps: boolean;
      httpsPortNumber: number;
      hardwareAccelerationRequiresPremiere: boolean;
      localAddress: string;
      wanAddress: string;
      serverName: string;
      version: string;
      operatingSystem: string;
      id: string;
    };
  }
>({
  url: "/api/vendor/emby/me",
  method: "GET"
});

// 获取 Emby 文件列表
export const getEmbyFileList = useDefineApi<
  {
    headers: { Authorization: string };
    data: {
      path: string;
    };
    params: {
      page: number;
      max: number;
    };
  },
  FileList
>({
  url: "/api/vendor/emby/list",
  method: "POST"
});

// 退出 Emby 登录
export const logoutEmby = useDefineApi<{ headers: { Authorization: string } }, any>({
  url: "/api/vendor/emby/logout",
  method: "POST"
});
