import os from "os";

export const getHealthStatus = () => {
  return {
    status: "OK",
    timestamp: new Date().toISOString(),
    // These extra details are what 25LPA-level developers include
    system: {
      uptime: process.uptime().toFixed(2) + " seconds",
      memoryUsage: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      platform: os.platform(),
    },
    message: "Backend is running smoothly",
  };
};